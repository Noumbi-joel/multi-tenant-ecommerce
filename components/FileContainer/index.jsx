import React from "react";

// comp
import BodyText from "../BodyText";
import { Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";
import Upload from "../../public/upload.svg";
import { DELETE_IMAGE, DELETE_IMAGE_CAT, SET_IMAGES, SET_IMAGES_CAT } from "../../constants";
import ImagePlus from "../../public/image-plus.svg";
import ImageCross from "../../public/image-cross.svg";
import { toast } from "react-hot-toast";

const FileContainer = ({ dispatch, images, cat }) => {
  const onSelectFiles = (e) => {
    const selectedFiles = e.target.files;

    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    if (imagesArray.length > 4) {
      return toast.error("You cannot upload more than 4 images");
    }

    if (cat) {
      return dispatch({ type: SET_IMAGES_CAT, payload: imagesArray });
    }
    dispatch({ type: SET_IMAGES, payload: imagesArray });
  };

  const handleDeleteImage = (image) => {
    if (cat) {
      dispatch({ type: DELETE_IMAGE_CAT, payload: image });
    }
    dispatch({ type: DELETE_IMAGE, payload: image });
  };

  return (
    <>
      <BodyText type="mr" title="Media" color={COLORS.grayscale_900} />

      <label
        className={
          images.length >= 1 ? "file-container-full" : "file-container"
        }
      >
        {images.length <= 0 && (
          <>
            <input
              type="file"
              onChange={onSelectFiles}
              accept="image/webp, image/jpg, image/jpeg, image/png"
              multiple
              className="file"
            />
            <Upload aria-label="upload" />
            <BodyText
              type="lr"
              title="Drag drop some files here, or click to select files"
              color={COLORS.grayscale_900}
            />
            <BodyText
              type="sr"
              title="1080 x 1080 (1:1) recommended, up to 2MB each."
              color="#A2A2A2"
            />
          </>
        )}
        {images.length > 0 && (
          <>
            {images.map((image, i) => (
              <div key={image} className="image">
                <img
                  src={image}
                  alt={image}
                  className={i === 0 ? "image-first" : "image-content"}
                />
                <ImageCross
                  aria-label="image-cross"
                  onClick={() => handleDeleteImage(image)}
                  className="image-cross"
                />
              </div>
            ))}
          </>
        )}
      </label>
      <Spacer />
    </>
  );
};

export default FileContainer;
