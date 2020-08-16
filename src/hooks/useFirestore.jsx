import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

// This hook gets the docs from the specified collection from Firestore
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    // listening to any changes in the passed in collection
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          // getting the data and id of every doc
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFirestore;
