import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

// This hook uploads the file passed in from ProgressBar comp to Firebase storage
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references of firebase
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    // uploading the file
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // getting the progress of upload
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        // handling upload errors
        setError(err);
      },
      async () => {
        // getting the uploaded file url
        const url = await storageRef.getDownloadURL();
        // adding new doc to firestore
        const createdAt = timestamp();
        collectionRef.add({ url, createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
