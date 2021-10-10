namespace WebApplExcelReader.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Device")]
    public partial class Device
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Device()
        {
            Model = new HashSet<Model>();
        }

        public int DeviceId { get; set; }

        [StringLength(200)]
        public string Name { get; set; }

        public int? DeviceTypeId { get; set; }

        public int CompanyId { get; set; }

        public virtual Company Company { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Model> Model { get; set; }

        public virtual DeviceType DeviceType { get; set; }
    }
}