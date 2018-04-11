using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace UsingWebControls
{
    public partial class UCExample : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var ctl = Page.LoadControl("~/UserControls/Header.ascx");
            HeaderPlaceHolder.Controls.Add(ctl);
        }
    }
}