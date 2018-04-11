using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(DataSourcingModelBinding.Startup))]
namespace DataSourcingModelBinding
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
