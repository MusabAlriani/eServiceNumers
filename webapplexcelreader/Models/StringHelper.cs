using System;

namespace WebApplExcelReader.Models
{
    public static class StringHelper
    {
        public static TResult NullSafe<TObj, TResult>(this TObj obj, Func<TObj, TResult> func, TResult ifNullReturn = default(TResult))
        {
            return obj != null ? func(obj) : ifNullReturn;
        }
    }
}