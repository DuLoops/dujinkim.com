"use server"
import { db } from '@/utils/firebase';
import { collection, getDocs, updateDoc } from 'firebase/firestore';
const updateCategories = async () => {
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

export default function UpdateTagsPage() {
  async function handleUpdateCategories() {
    try {
      await updateCategories();
      return { success: true, message: 'Categories successfully updated!' };
    } catch (error) {
      return { success: false, message: `Error updating categories: ${error.message}` };
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Update Categories Admin Panel</h1>
      <form action={handleUpdateCategories}>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Categories
        </button>
      </form>
    </div>
  );
}
