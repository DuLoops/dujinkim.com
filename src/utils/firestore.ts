import { db } from './firebase';
import { collection, getDocs, updateDoc } from 'firebase/firestore';

// ...existing code...

export async function getFirestoreImages() {
  // ...existing code...
}

export const updateCategories = async () => {
    console.log('eho')
  try {
    console.log('Updating categories...');
    const photosRef = collection(db, 'photos');
    const snapshot = await getDocs(photosRef);
    
    const updatePromises = snapshot.docs.map(doc => {
      const data = doc.data();
      const { categories } = data;
      
      const newCategories = {
        life: categories.life || false,
        design: false,
        landscape: categories.landscape || false,
        adventure: categories.adventure || false,
        all: categories.all || false,
        sports: categories.sports || false
      };

      return updateDoc(doc.ref, { categories: newCategories });
    });

    await Promise.all(updatePromises);
    console.log('Successfully updated categories');
    return true;
  } catch (error) {
    console.error('Error updating categories:', error);
    throw error;
  }
};
