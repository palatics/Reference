using System.Collections.Generic;
using System.Web.Mvc;
using TeamSearcher.Models;

namespace TeamSearcher.ViewModels
{  
    public class TeamsViewModel
    {
        public IEnumerable<Team> Teams { get; set; }
        public IEnumerable<SelectListItem> Columns { get; set; }
        public string SearchTerm { get; set; }
        public string SelectedColumn { get; set; }
    }
}