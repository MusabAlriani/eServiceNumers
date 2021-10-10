using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace WebApplExcelReader.Models
{
    public class PhoneNumbers
    {
        public string Id { get; set; }

        [Required(ErrorMessage = "يرجى كتابة الرقم قبل الضغط على زر البحت")]
        [DisplayName("رقم الهاتف")]
        public string PhoneNumber { get; set; }

        [DisplayName("السعر")]
        public string Price { get; set; }

        public string QuardPrice { get; set; }

        public string Number14xx { get; set; }

        public string Number15xx { get; set; }

        public string Number800xxxxxx { get; set; }

        public string Number900xxxxxx { get; set; }

        public string GetPrice(string number)
        {
            this.PhoneNumber = number;

            #region convert to  integer numbers

            int m1 = 0, m2 = 0, m3 = 0, m4 = 0, m5 = 0;
            m1 = int.Parse(this.PhoneNumber.NullSafe(n => n.Substring(0, 1)));
            m2 = int.Parse(this.PhoneNumber.NullSafe(n => n.Substring(1, 1)));
            m3 = int.Parse(this.PhoneNumber.NullSafe(n => n.Substring(2, 1)));
            m4 = int.Parse(this.PhoneNumber.NullSafe(n => n.Substring(3, 1)));
            m5 = int.Parse(this.PhoneNumber.NullSafe(n => n.Substring(4, 1)));

            #endregion convert to  integer numbers

            #region logic

            if (m1 == m2 && m2 == m3 && m3 == m4 && m4 == m5)
            {
                return (this.Price = "التصنيف ماسي وبتعرفة " + "قيمتها السنوية" + " 3600  " + " او 1035" + " دينار لربع السنة.");
            }
            else if (m1 != m2 && m2 == m3 && m3 == m4 && m4 == m5 || m1 == m2 && m2 == m3 && m3 == m4 && m4 != m5)
            {
                return (this.Price = "التصنيف ذهبي وبتعرفة " + "قيمتها السنوية" + " 3000  " + " او 870" + " دينار لربع السنة.");
            }
            else if (m1 == m2 + 1 && m2 == m3 + 1 && m3 == m4 + 1 && m4 == m5 + 1 || m1 == m2 - 1 && m2 == m3 - 1 && m3 == m4 - 1 && m4 == m5 - 1)
            {
                return (this.Price = "التصنيف فضي وبتعرفة " + "قيمتها السنوية" + " 2400  " + " او 690" + " دينار لربع السنة.");
            }
            else if (m1 == m2 && m3 == m4 && m5 != m4 || m1 == m2 && m3 != m4 && m3 != m2 && m4 == m5 || m1 != m2 && m2 == m3 && m4 == m5)
            {
                return (this.Price = "التصنيف فضي وبتعرفة " + "قيمتها السنوية" + " 2400  " + " او 960" + " دينار لربع السنة.");
            }
            else if (m3 == m4 && m4 == m5 || m2 == m3 && m3 == m4
                || m1 == m2 && m2 == m3 || m3 == m4 && m4 == m5)
            {
                return (this.Price = "التصنيف فضي وبتعرفة " + "قيمتها السنوية" + " 2400  " + " او 960" + " دينار لربع السنة.");
            }
            else
            {
                return (this.Price = "التصنيف عادي وبتعرفة " + "قيمتها السنوية" + " 1800  " + " او 520" + " دينار لربع السنة.");
            }

            #endregion logic
        }

        public bool is4DigitNumber(string number)
        {
            if (number == null || number == "")
            {
                return false;
            }
            else
            {
                this.Number14xx = number;
                string s1;
                s1 = this.Number14xx.Substring(0, 2);
                //s2 = this.Number14xx.NullSafe(n => n.Substring(1, 1));

                this.Number15xx = number;
                string s11;
                s11 = this.Number15xx.NullSafe(n => n.Substring(0, 2));
                //s12 = this.Number15xx.NullSafe(n => n.Substring(1, 1));

                if (s1 == "14" || s11 == "15")
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        public bool is10DigitNumber(string number)
        {
            if (number == null || number == "")
            {
                return false;
            }
            else
            {
                this.Number800xxxxxx = number;
                string s1, s11;

                s1 = this.Number800xxxxxx.Substring(0, 4);

                this.Number900xxxxxx = number;

                s11 = this.Number900xxxxxx.Substring(0, 4);

                if (s1 == "0800" || s11 == "0900")
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }
}