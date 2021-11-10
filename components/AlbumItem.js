import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const AlbumItem = ({ albumName, artistName, image }) => {
    return(
        <View>
            <TouchableOpacity>
                <View style={styles.view}>
                    <Image style={styles.image} source={{ uri: image }} />
                    <Text style={styles.albumText} numberOfLines={2} >{albumName}</Text>
                    <Text style={styles.artistText} numberOfLines={2} >{artistName}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AlbumItem;