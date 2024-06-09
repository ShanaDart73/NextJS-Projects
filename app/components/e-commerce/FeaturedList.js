import Link from "next/link";
import Image from "next/image";

const FeaturedList = () => {
  return (
    <div>
      <Link href="#">
        <div>
          <Image
            src="https://i.guim.co.uk/img/media/f151a31819430ddf387331a8a3df8201f95d4449/0_324_5616_3370/master/5616.jpg?width=1200&quality=85&auto=format&fit=max&s=7557d7972a41cf757dd2719b9129fa23"
            alt=""
            width={300}
            height={300}
            style={{ margin: "auto" }}
          />
          <Image
            src="https://cdn.mos.cms.futurecdn.net/RZpjoB2ryfQmiYzJdE7RCe-1200-80.jpg"
            alt=""
            width={300}
            height={300}
            style={{ margin: "auto" }}
          />
        </div>
      </Link>
    </div>
  );
};

export default FeaturedList;
