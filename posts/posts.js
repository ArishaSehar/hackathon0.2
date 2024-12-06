import { db, collection, query, where, onSnapshot } from "../firebase.js";

const trendingPost = document.getElementById("trendingPost");
const searchBtn = document.getElementById("searchBtn");
const searchCategory = document.getElementById("searchCategory");

const fetchPosts = (category = null) => {
    let q = category
        ? query(collection(db, "posts"), where("category", "==", category))
        : query(collection(db, "posts"));

    onSnapshot(q, (querySnapshot) => {
        trendingPost.innerHTML = "";
        if (querySnapshot.empty) {
            trendingPost.innerHTML = "<p>No posts available.</p>";
        } else {
            querySnapshot.forEach((doc) => {
                const post = doc.data();
                trendingPost.innerHTML += `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${post.category}</h5>
                            <p>${post.post}</p>
                            <small>${post.time?.toDate().toLocaleString()}</small>
                        </div>
                    </div>
                `;
            });
        }
    });
};

searchBtn.addEventListener("click", () => {
    const category = searchCategory.value;
    fetchPosts(category);
});

// Initial Fetch
fetchPosts();
