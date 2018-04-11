using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace UsingWebControls
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            LastName.Focus();
        }

        protected void SubmitButton_Click(object sender, EventArgs e)
        {
            Page.Validate();

            if (Page.IsValid)
            {
                var fname = FirstName.Text;
                var lname = LastName.Text;
                var state = StatesDropDown.SelectedValue;
                OutputLabel.Text = fname + " " + " " + lname + " " + state;
            }
           
        }
    }
}