import PostList from "@/components/home/postList";
import VideoList from "@/components/home/videoList";
import Search from "@/components/home/search";

export default async function Home({
  searchParams: { search },
}: {
  searchParams: { search: boolean };
}) {
  return (
    <div>
      <section className="min-h-screen bg-white px-5 pt-[80px] pb-[132px] rounded-t-2xl">
        {search ? <VideoList /> : <PostList />}
      </section>
      <Search />
    </div>
  );
}
