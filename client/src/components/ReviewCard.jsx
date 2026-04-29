function ReviewCard({form_inputs, onConfirm, onBack}) {
    return (
        <div className="bg-[#FAF6F0]/95 p-6 rounded-xl border border-[#C6A68E] shadow-lg">
            <div className="space-y-3 mb-6">
                <p className="text-[#6B2D39]"><strong>Name:</strong> {form_inputs.name}</p>
                <p className="text-[#6B2D39]"><strong>Email:</strong> {form_inputs.email}</p>
                <p className="text-[#6B2D39]"><strong>Flavor Idea:</strong> {form_inputs.newFlavor}</p>
            </div>        
        
            <div className="flex gap-4">
                <button onClick={onConfirm} className="bg-[#6B2D39] text-white px-6 py-2 rounded-lg hover:bg-[#6B5075]">
                    Confirm Submission
                </button>
                <button onClick={onBack} className="text-[#6B5075] underline">
                    Go Back
                </button>
            </div>
        </div>
    );
}