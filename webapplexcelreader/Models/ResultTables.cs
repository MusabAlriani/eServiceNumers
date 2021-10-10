namespace WebApplExcelReader.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public partial class ResultTables
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CategoryId { get; set; }

        [Key]
        [Column(Order = 1)]
        public string CategoryName { get; set; }

        [Key]
        [Column(Order = 2)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int CompanyId { get; set; }

        [Key]
        [Column(Order = 3)]
        public string CompanyName { get; set; }

        [Key]
        [Column(Order = 4)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int DeviceTypeId { get; set; }

        [Key]
        [Column(Order = 5)]
        public string DeviceTypeName { get; set; }

        [Key]
        [Column(Order = 6)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int DeviceId { get; set; }

        [Key]
        [Column(Order = 7)]
        public string DeviceName { get; set; }

        [Key]
        [Column(Order = 8)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ModelId { get; set; }

        [Key]
        [Column(Order = 9)]
        public string ModelName { get; set; }

        [Key]
        [Column(Order = 10)]
        public string CertivicateNumber { get; set; }
    }
}