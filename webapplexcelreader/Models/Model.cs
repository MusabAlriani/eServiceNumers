namespace WebApplExcelReader.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Model")]
    public partial class Model
    {
        public int ModelId { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(150)]
        public string CertivicateNumber { get; set; }

        public int? DeviceId { get; set; }

        public virtual Device Device { get; set; }
    }
}