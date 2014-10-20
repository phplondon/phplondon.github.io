# To re-run this file:
# sudo puppet apply /vagrant/puppet/manifests/site.pp --hiera_config /vagrant/hiera.yaml

Exec {
  path => [
    '/bin/',
    '/sbin/',
    '/usr/bin/',
    '/usr/sbin/',
    '/usr/local/bin/',
  ]
}

package {
  [
    'build-essential',
    'ruby-dev',
    'npm',
    'nodejs-legacy',
  ]:
  ensure => 'latest',
}

exec { 'gem install bundler':
  command => 'sudo gem install bundler',
  require => [Package['ruby-dev'], Package['build-essential']],
}

exec { 'bundle install':
  cwd     => '/var/www/phplondon',
  require => Exec['gem install bundler'],
}

exec { 'sudo npm install -g bower':
  require => [Package['npm'], Package['nodejs-legacy']],
}
