import axios from "axios";

export default async function fetchShow() {
    const res = await axios
        .get(
            "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
        );
    return res.data;
};