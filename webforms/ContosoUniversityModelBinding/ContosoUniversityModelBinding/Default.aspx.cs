using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using ContosoUniversityModelBinding.Models;
using System.Data.Entity;

namespace ContosoUniversityModelBinding
{
    public partial class _Default : Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public IQueryable<Student> studentsGrid_GetData()
        {
            ApplicationDbContext db = new ApplicationDbContext();
            var query = db.Students.Include(s => s.Enrollments.Select(e => e.Course));
            return query;
        }
    }
}