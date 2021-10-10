namespace WebApplExcelReader.Models
{
    using System.Data.Entity;

    public partial class EquipmentApprovalModel : DbContext
    {
        public EquipmentApprovalModel()
            : base("name=EquipmentApprovalModel1")
        {
        }

        public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
        public virtual DbSet<Category> Category { get; set; }

        public virtual DbSet<Company> Company { get; set; }
        public virtual DbSet<Device> Device { get; set; }
        public virtual DbSet<DeviceType> DeviceType { get; set; }
        public virtual DbSet<Model> Model { get; set; }
        public virtual DbSet<ResultTables> ResultTables { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<ResultTable> ResultTable { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .HasMany(e => e.Company)
                .WithOptional(e => e.Category)
                .WillCascadeOnDelete();

            modelBuilder.Entity<Company>()
                .HasMany(e => e.DeviceType)
                .WithMany(e => e.Company)
                .Map(m => m.ToTable("DeviceType_Company").MapLeftKey("CompId").MapRightKey("DevTyId"));

            modelBuilder.Entity<DeviceType>()
                .HasMany(e => e.Device)
                .WithOptional(e => e.DeviceType)
                .WillCascadeOnDelete();

            modelBuilder.Entity<Device>()
              .HasMany(e => e.Model)
              .WithRequired(e => e.Device)
              .WillCascadeOnDelete();
        }
    }
}