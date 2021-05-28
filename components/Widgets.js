import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    {
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/35052193_2078263052220146_7570226072218763264_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=26mE6dZlTnYAX-pPbFO&_nc_ht=scontent-bom1-1.xx&oh=69f284d2acc5f77fc25a8149a1cdd7ba&oe=60CEC487",
        name: "UEFA"
    },
    {
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t34.18173-12/38977782_2227498890899634_1860848619_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=97PDUG6-7i4AX8CBLgC&_nc_ht=scontent-bom1-1.xx&oh=0ac5f5f12359dc33e6ecab89c19f4b27&oe=60B1E3C7",
        name: "Real Madrid FC"
    },
    {
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/80839451_10159416621083298_220864728941985792_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XwDL3tfTWx4AX-oNCVQ&_nc_ht=scontent-bom1-1.xx&oh=75d112d61cffc6c68a07f7ca55dc9d97&oe=60D51FF7",
        name: "PSG"
    },
    {
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/75462338_10157030107892746_4920929384635826176_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bugr7kgPu6sAX96CFwj&tn=15M_Q7b-4Chu-6jT&_nc_ht=scontent-bom1-1.xx&oh=664b4c379afaea7281eaff403d5d0653&oe=60D60D18",
        name: "Man United"
    },
    {
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/128420657_10159817281789305_2244913344021808263_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=948qs44rLMQAX-sVXdl&_nc_oc=AQlrQI120FpUdEoBYUW4OsA2Ay2olRwWpswoPgvrDoTCUOn9DPP_viMtxNjvbEyLIoI&_nc_ht=scontent-bom1-1.xx&oh=bf367fefd3f94ecea617017c55cdeb80&oe=60D7D3E6",
        name: "Barcalona"
    },
];

function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-4 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            {contacts.map((contact) => (
                <Contact
                key={contact.src}
                src={contact.src}
                name={contact.name}
                />
            ))}
        </div>
    )
}

export default Widgets
