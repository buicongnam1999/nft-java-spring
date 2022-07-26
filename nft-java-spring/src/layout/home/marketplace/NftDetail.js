import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

export default function NftDetail() {
    let { id } = useParams();
    useEffect(() => {
        console.log(id);
    }, [])

    return (
        <>
            <div>
                Detail Nft
            </div>
        </>
    )
}
