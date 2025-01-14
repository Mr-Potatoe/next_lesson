import Navigation from "@/components/about/navigation";
import PostsList from "@/components/posts/PostsList";
import SearchBar from "@/components/posts/SearchBar";
import CreatePostButton from "@/components/posts/CreatePostButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Posts</h1>
          <div className="flex justify-between items-center gap-4">
            <SearchBar />
            <CreatePostButton />
          </div>
        </div>
        <PostsList />
      </main>
    </div>
  );
}