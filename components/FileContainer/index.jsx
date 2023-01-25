import React from "react";

// comp
import { BodyText, Button } from "..";
import { Spacer } from "@nextui-org/react";

// assets
import { COLORS } from "../../assets/colors";
import Upload from "../../public/upload.svg";
import {
  DELETE_ADMIN_LOGO,
  DELETE_FAVICON,
  DELETE_FULL_IMAGE,
  DELETE_IMAGE,
  DELETE_IMAGE_CAT,
  DELETE_STORE_LOGO,
  SET_ADMIN_LOGO,
  SET_FAVICON,
  SET_FULL_LOGO,
  SET_IMAGES,
  SET_IMAGES_CAT,
  SET_STORE_LOGO,
} from "../../constants";
import ImageCross from "../../public/image-cross.svg";
import toast from "react-hot-toast";

const FileContainer = ({
  dispatch,
  images,
  cat,
  type,
  image,
  fav,
  logo,
  admin,
}) => {
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

  const onSelectFile = (e) => {
    const selectedFile = e.target.files;
    const selectedFileArray = Array.from(selectedFile);
    const file = URL.createObjectURL(selectedFileArray[0]);
    if (fav) {
      return dispatch({
        type: SET_FAVICON,
        payload: file,
      });
    }

    if (logo) {
      return dispatch({
        type: SET_STORE_LOGO,
        payload: file,
      });
    }

    if (admin) {
      return dispatch({
        type: SET_ADMIN_LOGO,
        payload: file,
      });
    }

    return dispatch({
      type: SET_FULL_LOGO,
      payload: file,
    });
  };

  const handleDelete = () => {
    if (fav) {
      return dispatch({ type: DELETE_FAVICON });
    }
    if (logo) {
      return dispatch({ type: DELETE_STORE_LOGO });
    }
    return dispatch({ type: DELETE_ADMIN_LOGO });
  };

  if (type === "logo") {
    return (
      <div className="linear-layout">
        {image === null ? (
          <div className="upload-outline-container">
            <Upload />
          </div>
        ) : (
          <div className="upload-outline-container">
            <img src={image} alt={image} className="logo" />
          </div>
        )}
        <label>
          <input
            type="file"
            onChange={onSelectFile}
            accept="image/jpg, image/jpeg, image/png"
            multiple
            className="file"
          />
          <Button
            titleType="lr"
            className="updateImg"
            title="Update image"
            titleColor={COLORS.primary_base}
          />
        </label>
        <Button
          titleType="lr"
          className="clickable"
          title="Remove image"
          titleColor={COLORS.primary_base}
          onClick={() => handleDelete()}
        />
      </div>
    );
  }

  if (type === "fullImage") {
    return (
      <div className="linear-layout">
        {image === null ? (
          <div className="social-img-container">
            <Upload />
          </div>
        ) : (
          <div className="social-img-container">
            <img src={image} alt={image} className="social-img" />
          </div>
        )}
        <label>
          <input
            type="file"
            onChange={onSelectFile}
            accept="image/jpg, image/jpeg, image/png"
            multiple
            className="file"
          />
          <Button
            titleType="lr"
            className="updateImg"
            title="Update image"
            titleColor={COLORS.primary_base}
          />
        </label>
        <Button
          titleType="lr"
          className="clickable"
          title="Remove image"
          titleColor={COLORS.primary_base}
          onClick={() => dispatch({ type: DELETE_FULL_IMAGE })}
        />
      </div>
    );
  }

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
