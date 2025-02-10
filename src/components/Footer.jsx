import { FOOTER_CONTENT } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 text-neutral-400">
        <div className="max-w-7xl mx-auto px-4 border-t border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {FOOTER_CONTENT.sections.map((section, ind) => (
              <div key={ind}>
                <h3 className="text-white font-medium mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, ind) => (
                    <li key={ind}>
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="my-12 border-t border-neutral-800 pt-8 text-sm text-neutral-500">
            <div className="flex items-center">
              <div className="text-xs flex-1 text-left">
                <p>{FOOTER_CONTENT.platformsText}</p>
              </div>
              <div className="text-xs flex-1 text-center">
                <p>{FOOTER_CONTENT.copyrightText}</p>
              </div>
              <div className="flex-1"></div> {/* Empty div for balance */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
