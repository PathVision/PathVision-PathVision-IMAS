export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-300">
            <div className="flex flex-col items-center gap-4">
                {/* Loading spinner */}
                <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin" />
                {/* Loading text */}
                <span className="text-white/60 text-sm font-medium">Loading...</span>
            </div>
        </div>
    )
}
