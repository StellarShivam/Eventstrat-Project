import { ChevronUp } from "lucide-react";
const PANRegistration = () => {
  return (
    <div className="mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#124673]">PAN Registration</h1>
        <ChevronUp className="w-6 h-6 text-gray-400" />
      </div>

      <p className="text-gray-600 mb-8">
        Exporters can maintain foreign currency accounts to receive payments
        from overseas buyers, which can help to hedge against currency
        fluctuations.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Why is PAN Essential for Spice Exporters?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Tax Compliance:</h3>
          <p className="text-gray-600">
            PAN is mandatory for filing income tax returns. As a spice exporter,
            you will need to file income tax returns to report your profits and
            pay taxes on your export earnings.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Financial Transactions:
          </h3>
          <p className="text-gray-600">
            PAN is required for various financial transactions, including
            opening bank accounts, making investments, and conducting large cash
            transactions.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">GST Registration:</h3>
          <p className="text-gray-600">
            PAN is a prerequisite for obtaining GST registration, which is
            essential for conducting business within India, including domestic
            transactions related to your export operations.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Other Legal Requirements:
          </h3>
          <p className="text-gray-600">
            PAN may be required for various other legal and regulatory purposes,
            such as obtaining import- export licenses and other necessary
            permits.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-6">
        How to Obtain a PAN Card?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Online Application:
          </h3>
          <p className="text-gray-600">
            You can apply for a PAN card online through the NSDL or UTITSL
            websites.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Offline Application:
          </h3>
          <p className="text-gray-600">
            You can also apply for a PAN card offline by submitting the
            application form to designated centers
          </p>
        </div>
        <div>
          <h3 className="font-medium text-gray-900 mb-2">
            Required Documents:
          </h3>
          <p className="text-gray-600">
            The required documents for PAN card application may vary depending
            on the application method and applicant type. Generally, you will
            need to provide proof of identity and address, along with recent
            photographs.
          </p>
        </div>
      </div>

      <div className="bg-[#E5F3E5] rounded-lg p-4 text-gray-600">
        <p>
          To know more, read our comprehensive guide on{" "}
          <a href="#" className="text-blue-600 hover:underline">
            How to apply for PAN registration
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PANRegistration;
