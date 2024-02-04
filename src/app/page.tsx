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
      {search ? (
        <Drawer>
          <section className={defaultSectionStyle}>
            <VideoList />
          </section>
          <Search />
        </Drawer>
      ) : (
        <>
          <section className={`${defaultSectionStyle} pt-[80px]`}>
            <PostList />
          </section>
          <Search />
        </>
      )}
    </div>
  );
}
