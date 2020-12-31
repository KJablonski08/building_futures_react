import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { photos } from './photos';
import './gallery.css';

const PhotoGallery = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};

	return (
		<div className='gallery'>
			<h2>Photo Gallery</h2>
			<p>
				Hundreds of photographs are taken during each trip to Kenya, so you can
				imagine how difficult it is to reduce that number. These pictures speak
				louder than the words used to describe them, but if you would like to
				see the stories that go on around them, please visit our blog. There you
				will find much more detailed information about the region, the people
				and the relationships that are have been formed over the years.
			</p>
			<Gallery photos={photos} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={photos.map((x) => ({
								...x,
								srcset: x.srcSet,
								caption: x.title,
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	);
};
export default PhotoGallery;
