﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Master.Contract
{
  public  class DriverEarningPaymentType:IContract
    {
        public decimal CASH { get; set; }
        public decimal ONLINE { get; set; }
    }
}
