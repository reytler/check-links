export function CheckIcon({ok}:{ok:boolean}){
    if(ok){
        return(
            <div className="flex items-center justify-center h-auto">
                <div className="flex items-center justify-center h-6 w-6 bg-green-500 rounded-full max-auto">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                </div>
            </div>    
        )
    }

    return(
        <div className="flex items-center justify-center h-auto">
            <div className="flex items-center justify-center h-6 w-6 bg-red-500 rounded-full max-auto">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
                </svg>
            </div>
        </div>
    )
}