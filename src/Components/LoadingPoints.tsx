export function LoadingPoints(){
    return(
        <div className="flex items-center justify-center space-x-2 min-h-screen">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
    )
}