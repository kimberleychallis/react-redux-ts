import Photo from "./Photo";
import { useSelector } from "react-redux";
import { photos } from "./features/photos/photosSlice";

const PhotoList = () => {
  const allPhotos = useSelector(photos);

  return (
    <>
      {allPhotos.map((photo, index) => (
        <Photo
          url={photo.urls.regular}
          link={photo.links.html}
          photographer={photo.user.username}
          portfolio={photo.user.portfolio_url}
          forHire={photo.user.for_hire}
          key={index}
        />
      ))}
    </>
  );
};

export default PhotoList;
