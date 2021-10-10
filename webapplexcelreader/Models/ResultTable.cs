namespace WebApplExcelReader.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("ResultTable")]
    public partial class ResultTable
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CategoryId { get; set; }

        [StringLength(50)]
        public string CategoryName { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CompanyId { get; set; }

        [StringLength(200)]
        public string CompanyName { get; set; }

        [Key]
        [Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int DeviceTypeId { get; set; }

        [StringLength(100)]
        public string DeviceTypeName { get; set; }

        [Key]
        [Column(Order = 3)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int DeviceId { get; set; }

        [StringLength(200)]
        public string DeviceName { get; set; }

        [Key]
        [Column(Order = 4)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ModelId { get; set; }

        [StringLength(50)]
        public string ModelName { get; set; }

        [StringLength(150)]
        public string CertivicateNumber { get; set; }
    }
}