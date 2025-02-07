export default function Sidebar() {
    return (
        <>
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white p-5">
                <h1 className="text-2xl font-bold text-center">Sidebar</h1>
                <ul className="mt-8 space-y-4">
                    <li><a href="#" className="hover:text-blue-400">Home</a></li>
                    <li><a href="#" className="hover:text-blue-400">About</a></li>
                    <li><a href="#" className="hover:text-blue-400">Services</a></li>
                    <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
        </>
    );
}