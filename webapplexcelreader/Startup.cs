using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebApplExcelReader.Startup))]

namespace WebApplExcelReader
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}