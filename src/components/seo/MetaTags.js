export function MetaTags({ title, description, image }) {
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* 추가 메타태그 */}
      </>
    )
  }