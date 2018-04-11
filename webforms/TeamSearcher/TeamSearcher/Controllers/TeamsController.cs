using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Web.Mvc;
using Microsoft.Ajax.Utilities;
using TeamSearcher.Models;
using TeamSearcher.ViewModels;

namespace TeamSearcher.Controllers
{
    public class TeamsController : Controller
    {
        // Holds the teams available for searching.
        private IEnumerable<Team> _teams;

        // Holds the columns that will be made into a select list.
        private readonly List<SelectListItem> _columns = new List<SelectListItem>();

        // Hardcoded column key value pairs to make building the select list easier.
        private readonly Dictionary<string, string> _validNames = new Dictionary<string, string>()
        {
            {
                "All", "All"
            },
            {
                "Rank", "Rank"
            },
            {
                "Name", "Team Name"
            },
            {
                "Mascot", "Mascot"
            },
            {
                "LastWinDate", "Date of Last Win"
            },
            {
                "WinRate", "Win Rate"
            },
            {
                "Wins", "Wins"
            },
            {
                "Ties", "Ties"
            },
            {
                "Losses", "Losses"
            },
            {
                "GamesPlayed", "Total Games"
            }
        };

        // Initial page load, just shows the table of teams to the user 
        // along with columns available to search on.
        public ActionResult Index()
        {
            BuildTeamsList();

            var viewModel = new TeamsViewModel()
            {
                Teams = _teams,
                Columns = _columns
            };
            
            
            return View(viewModel);
        }

        // Searches the teams list based on search terms and column selected.
        [HttpPost]
        public ActionResult Index(string terms, string column)
        {
            BuildTeamsList(terms, column);

            if (column is null)
            {
                column = "All";
            }//end if
          
            var viewModel = new TeamsViewModel()
            {
                Teams = _teams,
                Columns = _columns,
                // To display the search terms to the user.
                SearchTerm = terms,
                SelectedColumn = column
            };

            return View(viewModel);
        }

        // Builds the list of avaliable teams from the csv file provided.
        // If terms or columns is passed to this method then additional measures 
        // will be taken to filter the data based on those parameters.
        private void BuildTeamsList(string terms = null, string column = null)
        {
            var termsLowerCase = terms;

            if (!string.IsNullOrWhiteSpace(termsLowerCase))
            {
                // Convert the search terms to lower to avoid being case sensitive.
                termsLowerCase = termsLowerCase.ToLower(CultureInfo.InvariantCulture);
            }


            _teams = System.IO.File
                .ReadLines(Server.MapPath(@"~/App_Data/CollegeFootballTeamWinsWithMascots.csv"))
                .Skip(1)
                .Select(x => x.Split(','))
                .Select(x => new Team()
                {
                    // Converts the string data from the csv file to what their data types might be 
                    // were they stored in a db. In the case of failure the default value of the type is used
                    // except in the case of DateTime which is defaulted to today.
                    Rank = TryConversion<int>(x[0]),
                    Name = x[1],
                    Mascot = x[2],
                    LastWinDate = TryConversion<DateTime>(x[3]),
                    WinRate = TryConversion<decimal>(x[4]),
                    Wins = TryConversion<int>(x[5]),
                    Losses = TryConversion<int>(x[6]),
                    Ties = TryConversion<int>(x[7]),
                    GamesPlayed = TryConversion<int>(x[8]),
                });

            // Go ahead and build the column list.
            BuildColumnList();


            // If a column was passed and it is valid.
            if (column != null && IsValidColumnName(column))
            {
                // If the column passed is not null or white space, is equal to the default column, and the terms are valid.
                if (!string.IsNullOrWhiteSpace(column) && column.Equals("All") && !string.IsNullOrWhiteSpace(termsLowerCase))
                {
                    // Global search, matches term against all columns. Also converting team data to lower case 
                    // to make case insensitive searching possible.
                    _teams = _teams.Where(t => t.Rank.ToString().Contains(termsLowerCase)
                                               || t.Name.ToLower(CultureInfo.InvariantCulture).Contains(termsLowerCase)
                                               || t.GamesPlayed.ToString().Contains(termsLowerCase)
                                               || t.LastWinDate.ToString("d").Contains(termsLowerCase)
                                               || t.Losses.ToString().Contains(termsLowerCase)
                                               || t.Mascot.ToString().ToLower(CultureInfo.InvariantCulture).Contains(termsLowerCase)
                                               || t.Wins.ToString().Contains(termsLowerCase)
                                               || t.Ties.ToString().Contains(termsLowerCase)
                                               || t.WinRate.ToString("{0:##.##%}").Contains(termsLowerCase)).ToList();
                }
                // If the column is valid and the terms are valid.
                else if (!string.IsNullOrWhiteSpace(column) && !string.IsNullOrWhiteSpace(termsLowerCase))
                {
                    // More specific search by column. Custom function needed in order to dynamically select
                    // by column name. 
                    _teams = _teams.Where(t => DetermineColumnName(t, column).Contains(termsLowerCase));
                   
                }

            }
            // If a bad column was passed to the controller. 
            else if(column != null && !IsValidColumnName(column))
            {
                // Add the error to the model so the user knows what happens. Redirect to index.
                ModelState.AddModelError("Columns","Column name provided does not exist. Search Impossible.");
                Redirect("Index");
            }
        }

        // Builds column list by using LINQ to iterate over the valid list dictionary. 
        private void BuildColumnList()
        {
            _validNames.ToList().ForEach(v =>
            {
                _columns.Add(new SelectListItem()
                {
                    Value = v.Key,
                    Text = v.Value   
                });
            });
        }

        // Uses reflection in order to select the correct property 
        // value from the column name passed.
        private static string DetermineColumnName(object team, string column)
        {
            var property = team.GetType().GetProperty(column);

            // Default column, just in case the property may be null.
            object propertyInfo = "All";

            if (property != null)
            {      
                propertyInfo = property.GetValue(team).ToString().ToLower();
            }//end if
        
            return propertyInfo.ToString();
        }

        // Checks the passed column value against the valid names. 
        private bool IsValidColumnName(string column)
        {
            var isValid = _validNames.TryGetValue(column, out string value);

            return isValid;
        }

        // Generic type method used to attempt to convert the string values
        // from the csv to their intended types. Defaults to default value of 
        // the type in case of failure. Except for datetime, which displays as 
        // today in the case of failure.
        public static T TryConversion<T>(string value)
        {
            object result;

            try
            {
                //Try to change the type.
                result = Convert.ChangeType(value, typeof(T));
            }
            catch (Exception)
            {
                // If it failed and an exception was thrown I check if it was a Datetime type;
                if (typeof(DateTime) == typeof(T))
                {
                    // Return today.
                    return (T)(object)DateTime.Today;
                }

                //Return default value because of failure to convert.
                return default(T);
            }// end try catch

            // Returns the converted value.
            return (T)result;
        }
    }
}