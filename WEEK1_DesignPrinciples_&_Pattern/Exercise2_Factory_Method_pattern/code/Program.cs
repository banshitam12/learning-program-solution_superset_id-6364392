using System;

namespace FactoryMethodPatternExample
{
    // Document Classes
    public interface Document
    {
        void Input();
        void Edit();
        void Save();
        void Share();
    }

    // Concrete Document Classes
    public class WordDocument : Document
    {
        public void Input()
        {
            Console.WriteLine("Input in the Word document (.docx)");
        }

        public void Edit()
        {
            Console.WriteLine("Editing the Word document");
        }

        public void Save()
        {
            Console.WriteLine("Saving Word document");
        }

        public void Share()
        {
            Console.WriteLine("Sharing the Word document");
        }
    }

    public class PdfDocument : Document
    {
        public void Input()
        {
            Console.WriteLine("Input the PDF document (.pdf)");
        }

        public void Edit()
        {
            Console.WriteLine("Editing the PDF document");
        }

        public void Save()
        {
            Console.WriteLine("Saving the PDF document");
        }

        public void Share()
        {
            Console.WriteLine("Sharing the PDF document");
        }
    }

    public class ExcelDocument : Document
    {
        public void Input()
        {
            Console.WriteLine("Input the Excel document (.xlsx)");
        }

        public void Edit()
        {
            Console.WriteLine("Editing the Excel document");
        }

        public void Save()
        {
            Console.WriteLine("Saving the Excel document");
        }

        public void Share()
        {
            Console.WriteLine("Sharing the Excel document");
        }
    }

    //Factory Method Implementation

    public abstract class DocumentFactory
    {
        public abstract Document CreateDocument();

        public void ProcessDocument()
        {
            Document doc = CreateDocument();
            doc.Input();
            doc.Edit();
            doc.Save();
            doc.Share();
            Console.WriteLine();
        }
    }

    
    public class WordDocumentFactory : DocumentFactory
    {
        public override Document CreateDocument()
        {
            Console.WriteLine("Creating Word document by using WordDocumentFactory");
            return new WordDocument();
        }
    }

    public class PdfDocumentFactory : DocumentFactory
    {
        public override Document CreateDocument()
        {
            Console.WriteLine("Creating PDF document by using PdfDocumentFactory");
            return new PdfDocument();
        }
    }

    public class ExcelDocumentFactory : DocumentFactory
    {
        public override Document CreateDocument()
        {
            Console.WriteLine("Creating Excel document by using ExcelDocumentFactory");
            return new ExcelDocument();
        }
    }

    //Test Case to check creation of different document types
    internal class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine("Factory Method Pattern \n");


            Console.WriteLine("1. Creating Word Document:");
            DocumentFactory wordFactory = new WordDocumentFactory();
            Document wordDoc = wordFactory.CreateDocument();
            Console.WriteLine("Word document creation done.\n");


            Console.WriteLine("2. Creating PDF Document:");
            DocumentFactory pdfFactory = new PdfDocumentFactory();
            Document pdfDoc = pdfFactory.CreateDocument();
            Console.WriteLine("PDF document creation done.\n");


            Console.WriteLine("3. Creating Excel Document:");
            DocumentFactory excelFactory = new ExcelDocumentFactory();
            Document excelDoc = excelFactory.CreateDocument();
            Console.WriteLine("Excel document creation done.\n");


            Console.WriteLine("4. Verifying the different document types present :");
            Console.WriteLine($"Word document type: {wordDoc.GetType().Name}");
            Console.WriteLine($"PDF document type: {pdfDoc.GetType().Name}");
            Console.WriteLine($"Excel document type: {excelDoc.GetType().Name}");

            Console.WriteLine("\n Different document types are successfully created with Factory Pattern");
            Console.WriteLine("You can press any key to exit...");
            Console.ReadKey();
        }
    }
}

