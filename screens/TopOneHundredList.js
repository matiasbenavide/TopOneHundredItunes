import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { getAlbums } from '../store/actions/top.one.hundred.list.actions';

import AlbumItem from '../components/AlbumItem';

const TopOneHundredList = () => {
    const dispatch = useDispatch();
    const albums = useSelector(state => state.albums.albums)

    useEffect(() => {
        dispatch(getAlbums())
    }, [])

    const [search, setSearch] = useState('');
    const [filterSearch, setFilterSearch] = useState([]);

    const updateSearch = (input) => {
        if(input) {
            const data = albums.filter((item) => {
                const albumName = item['im:name'].label
                const artistName = item['im:artist'].label
                const albumData = albumName ? albumName.toUpperCase() : ''.toUpperCase()
                const artistData = artistName ? artistName.toUpperCase() : ''.toUpperCase()
                const textData = input.toUpperCase()
                return albumData.indexOf(textData) > -1 || artistData.indexOf(textData) > -1
            })
            setFilterSearch(data);
            setSearch(input);
        } else {
            setFilterSearch(albums);
            setSearch('')
        }
    }

    const renderAlbum = (itemData) => {
        return(
            <AlbumItem
                image={itemData.item['im:image'][2].label}
                albumName={itemData.item['im:name'].label}
                artistName={itemData.item['im:artist'].label}
            />
        )
    }

    return(
        <View style={styles.view}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="LOOKING FOR A SPECIFIC ALBUM?"
                    value={search}
                    onChangeText={(text) => updateSearch(text)}
                />
            </View>
            <FlatList
                data={filterSearch}
                keyExtractor={item => item.id.attributes['im:id']}
                renderItem={renderAlbum}
                numColumns={2}
            />
        </View>
    )
};

export default TopOneHundredList;