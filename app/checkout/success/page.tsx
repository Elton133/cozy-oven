import React from 'react'

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { checkoutid?: string };
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2">Payment successful 🎉</h1>

        <p className="text-zinc-600 mb-4">
          Thanks for your payment. We’ve received it successfully.
        </p>

        {searchParams.checkoutid && (
          <p className="text-sm text-zinc-500">
            Reference: <span className="font-mono">{searchParams.checkoutid}</span>
          </p>
        )}
      </div>
    </div>
  );
}

