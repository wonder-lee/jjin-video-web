import Drawer from "@/components/common/drawer";
import PostList from "@/components/home/postList";
import VideoList from "@/components/home/videoList";
import Search from "@/components/home/search";

export default async function Home({
  searchParams: { search },
}: {
  searchParams: { search: boolean };
}) {
  const defaultSectionStyle =
    "min-h-screen bg-white px-5 pb-[132px] rounded-t-2xl";
  return (
    <div>
      <Drawer>
        <section className={defaultSectionStyle}>
          {search ? (
            <VideoList search={search} />
          ) : (
            <PostList search={search} />
          )}
        </section>
        <Search />
      </Drawer>
    </div>
  );
}
