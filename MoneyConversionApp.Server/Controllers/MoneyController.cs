using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Globalization;

namespace MoneyConversionApp.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoneyController : ControllerBase
    {
        [HttpGet("{amount}")]
        public ActionResult<string> ConvertToWords(double amount)
        {
            if (amount < 0 || amount > 999999999.99)
            {
                return BadRequest("Invalid amount. Please provide a value between 0 and 999,999,999.99");
            }

            string result = ConvertAmountToWords(amount);
            string jsonResult = JsonConvert.SerializeObject(result);
            return Content(jsonResult, "application/json");
        }

        private string ConvertAmountToWords(double amount)
        {
            string amountString = amount.ToString("F2", CultureInfo.InvariantCulture);
            string[] parts = amountString.Split('.', ',');

            if (parts.Length != 2 || !int.TryParse(parts[0], out int dollars) || !int.TryParse(parts[1], out int cents))
            {
                return "Invalid amount format";
            }

            string dollarsInWords = NumberToWords(dollars);
            string centsInWords = NumberToWords(cents);

            string result = $"{dollarsInWords} dollars and {centsInWords} cents";
            return result;
        }

        private static string NumberToWords(int number)
        {
            var unitsArray = new[]
            {
                "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
                "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
            };

            var tensArray = new[]
            {
                "Zero", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
            };

            string NumberToWordsInternal(int n) => n switch
            {
                0 => string.Empty,
                < 0 => "Negative " + NumberToWordsInternal(Math.Abs(n)),
                _ when n >= 1000000 => $"{NumberToWordsInternal(n / 1000000)} Million {NumberToWordsInternal(n % 1000000)}",
                _ when n >= 1000 => $"{NumberToWordsInternal(n / 1000)} Thousand {NumberToWordsInternal(n % 1000)}",
                _ when n >= 100 => $"{NumberToWordsInternal(n / 100)} Hundred {NumberToWordsInternal(n % 100)}",
                _ when n >= 20 => $"{tensArray[n / 10]}{((n % 10 > 0) ? $"-{unitsArray[n % 10]}" : string.Empty)}",
                _ => unitsArray[n]
            };

            return NumberToWordsInternal(number);
        }        
    }

}
