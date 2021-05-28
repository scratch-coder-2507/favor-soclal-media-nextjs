import StoryCard from "./StoryCard";

const stories = [
    {
        name: "UEFA Champions League",
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/186518821_4783416918371399_2951313834416072935_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=5b7eaf&_nc_ohc=WgGXSlL0ussAX8LLbCq&_nc_oc=AQk129Rb8zAiWzYRZhNnJ5-DpG7ebEiVb-az2iJpXmHc68nNB1Fcph-lZE3XLRlgjDU&_nc_ht=scontent-bom1-1.xx&oh=ad7cf8b0f25713a2eb7ff11d5ba36f7c&oe=60CFD6FA",
        profile: "https://avatarfiles.alphacoders.com/143/143370.jpg",
    },
    {
        name: "Real Madrid F.C",
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/186484366_10152465109729953_698308136984730309_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=5b7eaf&_nc_ohc=7z-odLL5nwwAX-CiAuU&_nc_ht=scontent-bom1-1.xx&oh=0f03ae80ec7cf50250241a06c5b98df9&oe=60D64EBA",
        profile: "https://scontent-bom1-1.xx.fbcdn.net/v/t34.18173-12/38977782_2227498890899634_1860848619_n.png?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=97PDUG6-7i4AX8CBLgC&_nc_ht=scontent-bom1-1.xx&oh=0ac5f5f12359dc33e6ecab89c19f4b27&oe=60B1E3C7",
    },
    {
        name: "PSG - Paris Saint German",
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/s1080x2048/190908859_10161383624293298_5370520436478073787_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=5b7eaf&_nc_ohc=FI3dwuqDCNoAX9n_y2h&_nc_ht=scontent-bom1-1.xx&tp=7&oh=e2cafbd1fef5bffa93cf372823735bd1&oe=60D51E1C",
        profile: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/80839451_10159416621083298_220864728941985792_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=XwDL3tfTWx4AX-oNCVQ&_nc_ht=scontent-bom1-1.xx&oh=75d112d61cffc6c68a07f7ca55dc9d97&oe=60D51FF7",
    },
    {
        name: "Manchester United",
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/190397149_10158643438622746_7178829238528454190_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=5b7eaf&_nc_ohc=0Sr4u84j-kwAX-va4um&_nc_ht=scontent-bom1-1.xx&oh=d5254ece652ddc7b56288a5b84cf7460&oe=60D5293A",
        profile: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/75462338_10157030107892746_4920929384635826176_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=bugr7kgPu6sAX96CFwj&tn=15M_Q7b-4Chu-6jT&_nc_ht=scontent-bom1-1.xx&oh=664b4c379afaea7281eaff403d5d0653&oe=60D60D18",
    },
    {
        name: "FC Barcalona",
        src: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/s1080x2048/186522381_10160466717959305_967224801593888127_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=5b7eaf&_nc_ohc=jvksVkmP8ncAX-S2dFz&_nc_ht=scontent-bom1-1.xx&tp=7&oh=e48bd6d1fc98a92902e6eb2041a50b5c&oe=60D45D14",
        profile: "https://scontent-bom1-1.xx.fbcdn.net/v/t1.6435-9/128420657_10159817281789305_2244913344021808263_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=948qs44rLMQAX-sVXdl&_nc_oc=AQlrQI120FpUdEoBYUW4OsA2Ay2olRwWpswoPgvrDoTCUOn9DPP_viMtxNjvbEyLIoI&_nc_ht=scontent-bom1-1.xx&oh=bf367fefd3f94ecea617017c55cdeb80&oe=60D7D3E6",
    },
];

function Stories() {
    
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}/>
            ))}
        </div>
    )
}

export default Stories
