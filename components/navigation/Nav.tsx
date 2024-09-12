'use client';
import { useNav } from '@/contexts/NavContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { resourceLinks as links, toolLinks } from '@/utils/links';
import { Button } from '../ui/button';
import Logo from '@/components/icons/logo';

const Nav = () => {
  const { extended, setExtended } = useNav();
  const path = usePathname();
  return (
    <nav
      className={`fixed py-3 px-4 space-y-8 rounded-xl bg-white border-[1px] border-muted-background flex flex-col ${
        extended ? 'inset-6' : 'top-6 inset-x-6'
      }`}
    >
      <div
        className={`flex justify-between items-center ${
          extended && 'pb-3 border-b-[1px] border-muted-background'
        }`}
      >
        <Link
          onClick={() => {
            setExtended(false);
          }}
          href='/'
          className='flex items-center space-x-2 font-bold text-lg '
        >
          <Logo className='size-8 fill-black' />
          <span>Glimpse</span>
        </Link>
        <button onClick={() => setExtended(!extended)}>
          {extended ? <X className='size-6' /> : <Menu className='size-6' />}
        </button>
      </div>
      {extended && (
        <div className='flex-grow overflow-y-auto max-h-[calc(100vh-6rem)]'>
          <div className='space-y-8'>
            {toolLinks.map((cat) => {
              return (
                <div className='space-y-3' key={cat.categoryName}>
                  <h2 className='font-bold text-xl'>{cat.categoryName}</h2>
                  <ul className='flex flex-col gap-2 items-center font-semibold'>
                    {cat.tools.map((tool) => {
                      return (
                        <li key={tool.name} className='w-full'>
                          <Button
                            variant={path === tool.href ? 'outline' : 'ghost'}
                            className='p-0 text-md w-full text-left'
                          >
                            <Link
                              onClick={() => {
                                setExtended(false);
                              }}
                              href={tool.href}
                              className='px-4 py-2 w-full'
                            >
                              {tool.name}
                            </Link>
                          </Button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
            <div className='space-y-3'>
              <h2 className='font-bold text-xl'>Resources</h2>
              <ul className='grid grid-cols-2 gap-2 items-center font-semibold'>
                {links.map((link) => {
                  return (
                    <li key={link.name} className='w-full'>
                      <Button
                        variant={path === link.href ? 'outline' : 'ghost'}
                        className='p-0 text-md w-full'
                      >
                        <Link
                          onClick={() => {
                            setExtended(false);
                          }}
                          href={link.href}
                          className='px-4 py-2 w-full'
                        >
                          {link.name}
                        </Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
      {extended && (
        <div className='flex flex-col space-y-4 pt-3 border-t-[1px] border-muted-background'>
          <Button variant='secondary' className='p-0 text-md'>
            <Link
              onClick={() => {
                setExtended(false);
              }}
              href='/sign-in'
              className='px-4 py-2 w-full'
            >
              Login
            </Link>
          </Button>
          <Button className='p-0 text-md'>
            <Link
              onClick={() => {
                setExtended(false);
              }}
              href='/sign-up'
              className='px-4 py-2 w-full'
            >
              Join
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
