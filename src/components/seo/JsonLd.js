export function JsonLd({ type }) {
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '서비스명',
      description: '서비스 설명',
      // 추가 스키마 데이터
    }
    
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    )
  }