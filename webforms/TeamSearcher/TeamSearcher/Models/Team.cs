using System;
using System.ComponentModel.DataAnnotations;

namespace TeamSearcher.Models
{
    public class Team
    {
        public object Rank { get; set; }
        public string Name { get; set; }
        public string Mascot { get; set; }
        public DateTime LastWinDate { get; set; }

        [DisplayFormat(DataFormatString = "{0:##.##%}")]
        public decimal WinRate { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        public int Ties { get; set; }
        public int GamesPlayed { get; set; }
    }
}