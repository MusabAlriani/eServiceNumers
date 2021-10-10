namespace WebApplExcelReader.Models.ViewModels
{
    public class CascadingViewModel
    {
        public int categoryId { get; set; }
        public int companyId { get; set; }
        public int deviceTypeId { get; set; }
        public int DeviceId { get; set; }
        public int ModelId { get; set; }

        public string categoryName { get; set; }
        public string companyName { get; set; }
        public string deviceTypeName { get; set; }
        public string deviceName { get; set; }
        public string modelName { get; set; }
        public string modelCertivicate { get; set; }
    }
}