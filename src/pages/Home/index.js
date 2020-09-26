/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import LoaderButton from '../../components/LoaderButton'

import api from '../../config'

function Home() {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    async function getVideos(){
      try{
        const response = await api.get('categorias/videos')
        setVideoData(response.data)
      }catch(error){
        console.log(error)
      }
    }
    getVideos()
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {videoData.length === 0 && (<LoaderButton/>)}
      
      {videoData.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={videoData[0].videos[0].titulo}
                url={videoData[0].videos[0].url}
                videoDescription={videoData[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={videoData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
