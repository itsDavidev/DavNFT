import { useEffect, useReducer } from 'react';

import { INITIAL_STATE_COLLECTION_ASSETS_NFTS } from '../../constants/collection.const';
import { ACTIONS_COLLECTION_NFTS } from '../actions/collections.actions';
import collectionApi from '../api/collectionNFTs.api';
import { collectionNFTsReducer } from '../reducers/collectionNFTs.reducer';

function useCollectionNFTs(slug) {
    const [collection, setCollection] = useReducer(
        collectionNFTsReducer,
        INITIAL_STATE_COLLECTION_ASSETS_NFTS
    );

    const initSearchCollection = () =>
        setCollection({
            type: ACTIONS_COLLECTION_NFTS._INITIAL_SEARCH_COLLECTION_,
        });

    const successGetCollection = ({ collection }) =>
        setCollection({
            type: ACTIONS_COLLECTION_NFTS._SUCCESS_SEARCH_COLLECTION_,
            args: {
                collection,
            },
        });

    const failureGetCollection = ({ error }) =>
        setCollection({
            type: ACTIONS_COLLECTION_NFTS._FAILURE_GET_COLLECTION_,
            args: {
                error,
            },
        });

    useEffect(() => {

        collectionApi({
            init: initSearchCollection,
            success: successGetCollection,
            failure: failureGetCollection,
            slug
        })

    }, [slug, collection.collection_slug]);

    return {
        collection,
    };
}

export default useCollectionNFTs;