using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Password_Generator
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            const string ValidCharacters = "abcdefghijklmnopqrstvuwxyzABCEDFGIJKLMNOPQRSTUVWXYZ1234567890";
            StringBuilder result = new StringBuilder();
            Random rand = new Random();
            int length = 13;
            while (0 < length--)
            {
                result.Append(ValidCharacters[rand.Next(ValidCharacters.Length)]);
            }
            textBox1.Text = result.ToString();

        }
    }
}
