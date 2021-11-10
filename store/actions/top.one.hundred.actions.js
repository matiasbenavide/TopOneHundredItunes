export const GET_ALBUMS = 'GET_ALBUMS';

export const getAlbums = (id) => {
    try {
        return async dispatch => {
            const result = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await result.json()

            if(json){
                dispatch({
                    type: GET_ALBUMS,
                    id,
                    payload: json.feed.entry,
                })
            } else {
                console.log('Unable to fetch API');
            }
        }
    } catch (error) {
        console.log(error)
    }
};